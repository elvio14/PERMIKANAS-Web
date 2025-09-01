"use server"

import { authPromise, db } from "./firebase"
import { query, where, collection, getDocs, getDoc, setDoc,doc } from "firebase/firestore"
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
  const date = new Date()
  const time = date.getTime().toString()
  try{
    await setDoc(doc(db, "wordleSubmissions", time), {
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

async function wordleLogin(username,pass) {
  await authPromise
  const q = query(
    collection(db, "wordleUsers"),
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

async function wordleSignup(username, pass, chapter, city){
  await authPromise
  const q = query(
    collection(db, "wordleUsers"),
    where("username", "==", username)
  ) 
  const querySnapshot = await getDocs(q)
  if(!querySnapshot.empty){
    return null
  }

  const d = new Date()
  const id = d.getTime().toString()
  try{
    await setDoc(doc(db, "wordleUsers", id), {
      username: username,
      lastWordleNumber: 0,
      lastWordleState: "",
      lastWordleResults: "",
      lastWordleIsSolved: false,
      password: pass,
      totalScore: 0,
      city: city,
      chapter: chapter
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
  const ref = doc(db, "wordleUsers",id)
  try{
    const docSnap = await getDoc(ref)
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() }
    } else {
      return null
    }
  }catch(err){
    console.error("Error getting user." , err)
  }
}

async function getAllUserData() {
  await authPromise;
  try {
    const querySnap = await getDocs(collection(db, "wordleUsers"));

    const users = querySnap.docs.map(docSnap => ({
      id: docSnap.id,
      ...docSnap.data(),
    }))
    return users;
  } catch (err) {
    console.error("Error getting all users:", err);
    return []
  }
}

async function updateUserData(id, data){
  await authPromise
  const ref = doc(db, "wordleUsers", id);
  try {
    await setDoc(ref, data, { merge: true })
    console.log("User updated:", id)
  } catch (err) {
    console.error("Error updating user:", err)
  }
}

export {createMember, submitWordle, getAllSubmissions, getWordleByNumber, 
  wordleSignup, wordleLogin, getWordleUserData, updateUserData, getAllUserData} 