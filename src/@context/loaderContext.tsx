import React, { createContext, useContext, useEffect, useState } from 'react'

import router from 'next/router'

import type { Dispatch, ReactNode, SetStateAction } from 'react'

import { RouterLoader } from '~features'

type LoaderContextProps = {
  customLoaderState: boolean
  setCustomLoaderState: Dispatch<SetStateAction<boolean>>
}

export const LoaderContext = createContext<LoaderContextProps>({
  customLoaderState: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function -- Necessário para iniciar o estado
  setCustomLoaderState: () => {},
})

type LoaderProviderProps = {
  children: ReactNode
}

export const LoaderProvider = ({ children }: LoaderProviderProps) => {
  const [customLoaderState, setCustomLoaderState] = useState(false)

  const handleStart = () => {
    setCustomLoaderState(true)
  }

  const handleStop = () => {
    setCustomLoaderState(false)
  }

  useEffect(() => {
    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleStop)
    router.events.on('routeChangeError', handleStop)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleStop)
      router.events.off('routeChangeError', handleStop)
    }
  }, [])

  return (
    <LoaderContext.Provider value={{ customLoaderState, setCustomLoaderState }}>
      <RouterLoader isOpen={customLoaderState} />
      {children}
    </LoaderContext.Provider>
  )
}

export const useLoader = () => useContext(LoaderContext)
