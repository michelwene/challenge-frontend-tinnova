import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'

import router from 'next/router'

import type { Dispatch, ReactNode, SetStateAction } from 'react'

import { RouterLoader } from '~features'

type LoaderContextProps = {
  customLoaderState: boolean
  setCustomLoaderState: Dispatch<SetStateAction<boolean>>
}

//@ts-expect-error -- Necessário para o funcionamento do createContext
export const LoaderContext = createContext<LoaderContextProps>({})

type LoaderProviderProps = {
  children: ReactNode
}

export const LoaderProvider = ({ children }: LoaderProviderProps) => {
  const [customLoaderState, setCustomLoaderState] = useState(false)

  const handleStart = useCallback(() => {
    setCustomLoaderState(true)
  }, [])

  const handleStop = useCallback(() => {
    setCustomLoaderState(false)
  }, [])

  useEffect(() => {
    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleStop)
    router.events.on('routeChangeError', handleStop)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleStop)
      router.events.off('routeChangeError', handleStop)
    }
  }, [handleStart, handleStop])

  return (
    <LoaderContext.Provider value={{ customLoaderState, setCustomLoaderState }}>
      <RouterLoader isOpen={customLoaderState} />
      {children}
    </LoaderContext.Provider>
  )
}

export const useLoader = () => useContext(LoaderContext)
