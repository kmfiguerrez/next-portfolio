'use client'

import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";


export default function DisappearingText() {
    const jobTitles = [['IT', 'SPECIALIST'], ['JAVASCRIPT', 'DEVELOPER']];
    const job = jobTitles[0]    
    const [currentJob, setCurrentJob] = useState('');
    const [firstWord, setFirstWord] = useState('');
    const [secondWord, setSecondWord] = useState('');
    const [status, setstatus] = useState('displaying');
    const [nextWord, setNextWord] = useState('first-word');
    const countRef = useRef(0);
    
 
    const displayText = async () => {
        return new Promise ((resolve, reject) => {
            const timeoutId = setTimeout(() => {
                setCurrentJob(currentJob + job[countRef.current])
                countRef.current++
            }, 500)
    
            // To prevent displaying undefined.
            if (countRef.current === job.length) {
                clearTimeout(timeoutId)
                resolve('Done displaying text!')
            }
        })
        
    }
    
    const removeText = async () => {
        return new Promise((resolve, reject) => {
            const timeoutId = setTimeout(() => {
                // Remove each character from the last.
                let previousWord = currentJob.split('') 
                previousWord.pop();            
    
                setCurrentJob(previousWord.join(''))
                countRef.current--
            }, 500)
    
            // To prevent displaying undefined.
            if (countRef.current === 0) {
                clearTimeout(timeoutId)
                resolve('Done removing text!')
            }
        })        
    }

    const displayTextSync = (
        text: string,
        customHook: Dispatch<SetStateAction<string>>,
        currentWord: string,
        delay: number
        ) => {
        /**
         * text - characters to display.
         * customHook - state functions(setFirstWord, setSecondWord).
         * currentWord - state variables(firstWord, secondWord).
        */

        const timeoutId = setTimeout(() => {            
            customHook(currentWord + text[countRef.current])                        
            countRef.current++ // Count characters.
        }, delay)

        // To prevent displaying undefined.
        if (countRef.current === text.length) {
            clearTimeout(timeoutId)

            // Reset characters count.
            countRef.current = 0
            
            // To display the next word.
            setNextWord('second-word') 

            // If done with the second word.
            if (nextWord === 'second-word') {
                // Set the status.
                setstatus('sleeping')         
            }
        }        
    }

    const removeTextSync = (        
        customHook: Dispatch<SetStateAction<string>>,
        currentWord: string,
        delay: number
        ) => {
        /**         
         * customHook - state functions(setFirstWord, setSecondWord).
         * currentWord - state variables(firstWord, secondWord).
        */
        
        // Set the countRef to the length of the second word
        // then to the first word by reading the nextWord state variable.
        nextWord === 'second-word' ? countRef.current = secondWord.length : countRef.current = firstWord.length

        const timeoutId = setTimeout(() => {
            // Remove each character from the last char position.
            // Start first with the second word.
            let wordToRemove = currentWord.split('')
            wordToRemove.pop();
            
            customHook(wordToRemove.join(''))
            countRef.current--
        }, delay)

        // To prevent displaying undefined.
        if (countRef.current === 0) {
            clearTimeout(timeoutId)

            // If done with the second word then set it to first word.
            setNextWord('first-word')

            // If done with the first word then set the status.
            if (nextWord === 'first-word') {
                setstatus('displaying')    
            }            
        }         
    }

    const sleep = async (delay: number) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("Done sleeping!")
                setstatus('removing')
            }, delay)
        })
    }

    useEffect(() => {

        const display = async () => {            
            
            switch (status) {
                case 'displaying': {
                    if (nextWord === 'first-word') {
                        displayTextSync(job[0], setFirstWord, firstWord, 100);
                    } else {
                        displayTextSync(job[1], setSecondWord, secondWord, 100);                        
                    }
                    break;
                }
                case 'sleeping': {
                    await sleep(3000)
                    break;
                }
                case 'removing': {
                    if (nextWord === 'second-word') {
                        removeTextSync(setSecondWord, secondWord, 100)
                    } else {
                        removeTextSync(setFirstWord, firstWord, 100)
                    }
                    break;
                }                           
                default:
                    break;
            }
            
        }        

        display()        
        
    }, [firstWord, secondWord, status, nextWord])    

    return (
        <>
            {/* <p>{currentJob}</p> */}
            <p className="before:content-cli">{firstWord} <span className="text-blue-700">{secondWord}</span></p>
            <p>{nextWord.toString()}</p>
            <p>current count: {countRef.current}</p>
            <p>status: {status.toString()}</p>
            <p>{job[0].length}</p>
        </>        
    )
}