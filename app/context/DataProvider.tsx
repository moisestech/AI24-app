'use client'

import type { ReactNode, Dispatch, SetStateAction } from 'react'
import type { Session } from '@supabase/supabase-js'
import React, { useState, useEffect, createContext, useContext } from "react"
import supabase from "../../supabase/supabase"
import { useRouter } from "next/navigation"
import { toast } from 'react-toastify'

interface DataContextValue {
  User: Session | null
  setUser: Dispatch<SetStateAction<Session | null>>
  WatchList: any[] // Adjust the type accordingly
  setWatchList: Dispatch<SetStateAction<any[]>> // Adjust the type accordingly
  History: any[] // Adjust the type accordingly
  setHistory: Dispatch<SetStateAction<any[]>> // Adjust the type accordingly
  Loading: boolean
}

export const DataContext = createContext<DataContextValue>({
  User: null,
  setUser: () => {},
  WatchList: [],
  setWatchList: () => {},
  History: [],
  setHistory: () => {},
  Loading: false,
});

export function DataProvider({ children }: { children: ReactNode }) {
  const [User, setUser] = useState<Session | null>(null)
  const [Loading, setLoading] = useState(true)

  const [WatchList, setWatchList] = useState<any[]>([])
  const [History, setHistory] = useState<any[]>([])

  const handleSession = async () => {
    console.log("Session")
    const { data, error } = await supabase.auth.getSession()

    if (error) toast.error(error.message)
    setUser(data?.session ?? null)
    setLoading(false)
    // if (data.session.user.id)
  }

  const handleData = async () => {
    console.log("Data")
    const { data, error } = await supabase
      .from("AI24")
      .select("watch_list,history")
      .eq("userid", User)
    if (error) console.log(error)
    else {
      setWatchList(data[0].watch_list)
      setHistory(data[0].history)
    }
  }

  useEffect(() => {
    handleSession()
  }, [])

  useEffect(() => {
    if (User) handleData()
  }, [User])

  useEffect(() => {
    handleData()
  }, [handleData])

  return (
    <DataContext.Provider
      value={{
        User,
        setUser,
        WatchList,
        setWatchList,
        History,
        setHistory,
        Loading,
      }}
    >
      {children}
    </DataContext.Provider>
  )
}

export const RequireAuth = ({ children }: { children: ReactNode }) => {
  const context = useContext<DataContextValue>(DataContext)
  
  if (!context) {
    throw new Error('RequireAuth must be used within a DataProvider');
  }

  const { User, Loading } = context;
  const router = useRouter();

  if (Loading) return <div>{'Loading...'}</div>
  return User ? children : router.push("/signin")
}
