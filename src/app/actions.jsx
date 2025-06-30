"use server"

import { db } from "./firebase"

import { setDoc, doc } from "firebase/firestore"

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
  try{
    await setDoc(doc(db, "wordle", data.username), {
      name: data.name,
      wordleNumber: data.wordleNumber,
      wordleStats: data.wordleStats,
      chapter: data.chapter,
      city: data.city,
      timeAdded: Date.now(),
    })
  }catch(e){
    console.error("Error submitting wordle: ",e)
  }
}

export {createMember, submitWordle} 