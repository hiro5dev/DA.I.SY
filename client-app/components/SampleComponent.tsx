"use client"
import React from "react"
import { useState, useEffect } from 'react';

import Link from 'next/link';
import { useAtom } from "jotai"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import { 
    useAccount, useContractRead,
         useContractWrite,
         usePrepareContractWrite,
         useWaitForTransaction  } from 'wagmi'

import ABI from '@/constants/ABI.json'
import CONTRACT1_ADDRESS from '@/constants/addressMapping.js'

export function SampleComponent({ title, subtitle }) {
    const { address } = useAccount();
    const [ counter, setCounter ] = useState(0)

    const { data :useContractReadData } = useContractRead({
        address: CONTRACT1_ADDRESS,
        abi: ABI,
        functionName: 'getValue',
        watch: true
    })

    const { config } = usePrepareContractWrite({
        address: CONTRACT1_ADDRESS,
        abi: ABI,
        functionName: 'setValue',
        args: [counter],

    })

    const {data : useContractWriteData , write } = useContractWrite(config)

    const {data : useWaitForTransactionData, isSuccess} = useWaitForTransaction({
        hash: useContractWriteData?.hash
    })

    useEffect(() => {
        console.log("__________________________");
        console.log("useContractReadData", useContractReadData);
        console.log("useContractWriteData:", useContractWriteData);
        console.log("useWaitForTransactionData:", useWaitForTransactionData);
        console.log("isSuccess:", isSuccess);
        console.log("__________________________");
    }, [useContractReadData, useContractWriteData, useWaitForTransactionData, isSuccess]);

    return (
        <div className="flex items-center min-h-screen min-w-screen">
            <div className="bg-white rounded-lg p-8 shadow-md">
                <h1 className="text-3xl font-semibold mb-4 text-gray-800">
                    {title} - {subtitle}
                </h1>
                <p className="text-sm text-gray-600">Address: {address}</p>
                <p className="text-sm text-gray-600">Counter: {counter}</p>

                <div className="mt-4">
                    <label className="block text-sm text-gray-600">Enter New Number:</label>
                    <Input
                        className="w-full px-3 py-2 border rounded-md mt-1"
                        type="number"
                        value={counter}
                        onChange={(e) => setCounter(e.target.value)}
                    />
                </div>

                <Button
                    className={`mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded ${
                        !write && "opacity-50 cursor-not-allowed"
                    }`}
                    disabled={!write}
                    onClick={() => write?.()}
                >
                    Change Number
                </Button>

                {isSuccess && (
                    <div className="mt-4 text-green-600">{useContractReadData?.toString()}</div>
                )}
            </div>
        </div>
    )
}

export default SampleComponent
