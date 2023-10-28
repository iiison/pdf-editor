import { useState, Dispatch, SetStateAction, ChangeEvent } from 'react'

type InputProps = {
  value: string | undefined;
  onChange: Dispatch<SetStateAction<string>>;
  placeholder?: string | undefined;
  classes?: string | undefined;
}

type TextAProps = {
  value: string;
  rows?: number | undefined;
  onChange: ((value: any) => void) | Dispatch<SetStateAction<string>>;
  placeholder?: string | undefined;
  classes?: string | undefined;
}

export function Input({ value, onChange, placeholder }: InputProps) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {value: inputValue} = event.target

    onChange(inputValue)
  }

  return (
    <input 
      className={`py-1 px-2 rounded rounded-md text-mirage-800 outline-0 border border-mirage-300`}
      type="text" 
      value={value} 
      onChange={handleChange} 
      placeholder={placeholder} 
    />
  )
}

export function TextArea({ rows = 2, value, onChange, placeholder }: TextAProps) {
  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const {value: inputValue} = event.target

    onChange(inputValue)
  }

  return (
    <textarea 
      className={`py-1 px-2 rounded rounded-md text-mirage-800 outline-0 border border-mirage-300`}
      rows={rows}
      value={value} 
      onChange={handleChange} 
      placeholder={placeholder} 
    />
  )
}
