"use server"

import { authPromise, db } from "./firebase"

import { setDoc, doc } from "firebase/firestore"
import { query, where, collection, getDocs } from "firebase/firestore"
import { Timestamp } from "firebase/firestore";

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
  await authPromise;
  const snapshot = await getDocs(collection(db, "wordleSubmissions"));
  const items = []
  snapshot.forEach((doc) => {
    const data = doc.data();
    let timeAdded = null
    if (data.timeAdded?.seconds) {
      timeAdded = new Timestamp(data.timeAdded.seconds, data.timeAdded.nanoseconds).toDate();
    }

    items.push({
      id: doc.id,
      ...data,
      timeAdded: timeAdded, // Convert Firestore Timestamp
      
    });
  });

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

async function worldeLogin(username,pass) {
  await authPromise
  const q = query(
    collection(db, "worldeUsers"),
    where("username", "==", username),
    where("password","==",pass)
  )
  const querySnapshot = await getDocs(q)
  if (!querySnapshot.empty) {
    const docSnap = querySnapshot.docs[0]
    return { id: docSnap.id}
  } else {
    return null
  }
}

async function wordleSignup(username, pass){
  await authPromise
  const q = query(
    collection(db, "worldeUsers"),
    where("username", "==", username)
  ) 
  const querySnapshot = await getDocs(q)
  if(querySnapshot.empty){
    return null
  }

  const d = new Date()
  const id = d.getTime().toString()
  try{
    await setDoc(doc(db, "wordleUsers", id), {
      username: username,
      lastWordleNumber: 0,
      lastWordleState: "",
      password: pass,
      totalScore: 0
    })
    console.log("User doc written with docref: ", username)
    return {id: id}
  }catch(e){
    console.error("Error adding document: ", e)
    return null
  }
}

async function getWordleUserData(id){
  await authPromise
  const docSnap = await getDocs(doc(db, "wordleUsers",id))
  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() }
  } else {
    return null
  }
}

export {createMember, submitWordle, getAllSubmissions, getWordleByNumber, wordleSignup, worldeLogin, getWordleUserData} 