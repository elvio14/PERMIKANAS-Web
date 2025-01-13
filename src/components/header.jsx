"use client"
import {MainButton, SecondaryButton} from '@/components/button.jsx'
import Dropdown from './dropdown'
import { useState } from 'react'

export default function Header(){

    const [triggerResources, setTriggerResources] = useState(false)

    return (
        <div className="w-full h-20 bg-[var(--main)] text-white grid grid-cols-[1fr_1.4fr] items-center px-6 shadow-md">
            <div style={{paddingLeft: '3rem'}}>   
                <img style={{ borderRadius: '5rem'}} src="/dummy_logo.jpg" alt="Permkanas Logo" width={64}></img>
            </div>
            <div style={{paddingRight: '3rem'}}>
                <nav className="flex gap-4 justify-end">
                  <SecondaryButton text='About Us'></SecondaryButton>
                  <SecondaryButton text='Events'></SecondaryButton>
                  <Dropdown onMouseEnter={() => console.log('Mouse enter parent')}
                    text='Resources'
                    dropTexts={['Before & Upon Arrival', 'Survival Tips']}></Dropdown>
                  <SecondaryButton text='Communities'></SecondaryButton>
                  <MainButton text='Contact'></MainButton>
                </nav>
            </div>
        </div>
    )
}