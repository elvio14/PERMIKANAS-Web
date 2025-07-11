"use server"

import { authPromise, db } from "./firebase"

import { setDoc, doc } from "firebase/firestore"
import { query, where, collection, getDocs } from "firebase/firestore"

async function createMember(member){
  try{
    await setDoc(doc(db, "members", member.email), {
      name: member.name,
      email: member.email,
      occupation: member.occupation,
      institution: member.institution,
      institutionOther: member.institutionOther,
      city: member.city,
      province: member.province,
      timeAdded: Date.now()
    })
    console.log("User doc written with docref: ", member)
  }catch(e){
    console.error("Error adding document: ", e)
  }
}

async function submitWordle(data){
  await authPromise;
  try{
    await setDoc(doc(db, "wordleSubmissions", data.username), {
      username: data.username,
      wordleNumber: data.wordleNumber,
      panelResults: data.panelResults,
      chapter: data.chapter,
      city: data.city,
      timeAdded: Date.now(),
    })
  }catch(e){
    console.error("Error submitting wordle: ",e)
  }
}

async function getAllSubmissions() {
  const snapshot = await db.collection("wordleSubmissions").get()
  const items = []
  snapshot.forEach(doc => {
    items.push({ id: doc.id, ...doc.data()})
  })

  return items
}
async function getWordleByNumber(number) {
  await authPromise;
  const q = query(
    collection(db, "wordle"),
    where("number", "==", number)
  )
  const querySnapshot = await getDocs(q)
  if (!querySnapshot.empty) {
    const docSnap = querySnapshot.docs[0]
    return { id: docSnap.id, ...docSnap.data() }
  } else {
    return null
  }
}

export {createMember, submitWordle, getAllSubmissions, getWordleByNumber} 