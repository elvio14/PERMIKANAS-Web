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
        city: member.city,
        province: member.province
      })
      console.log("User doc written with docref: ", member)
    }catch(e){
      console.error("Error adding document: ", e)
    }
  }


export {createMember} 