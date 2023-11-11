import {Linkedin, Github} from 'lucide-react'
import { Editor } from './components/Editor'

export default function App() {
  return (
    <div className="min-h-screen p-8 text-zinc-900 bg-gradient-to-b from-gray-900 via-purple-900 to-violet-600">
      <div className="bg-white w-[1100px] mx-auto rounded-xl min-h-[720px] shadow-sm border border-black/20 overflow-hidden grid grid-cols-[16rem_1fr]">
        <aside className="flex flex-col justify-between bg-zinc-50 border-r border-r-zinc-100 p-4">
          <div className="flex flex-col gap-4">
            <div className="flex gap-2 group">
              <button className="w-3 h-3 rounded-full bg-zinc-300 group-hover:bg-red-400"></button>
              <button className="w-3 h-3 rounded-full bg-zinc-300 group-hover:bg-yellow-400"></button>
              <button className="w-3 h-3 rounded-full bg-zinc-300 group-hover:bg-green-400"></button>
            </div>
            <p className="text-gray-400 text-sm font-normal"><span className="text-violet-700 text-base font-bold">NoteApp</span> - transforme texto em organização.</p>
          </div>
          <div className='flex flex-col items-center gap-1'>
            <p className='text-gray-400 text-xs font-normal'>Desenvolvido por Anderson Paiva</p>
            <div className='flex gap-1 items-center'>
              <a target='_black' href="https://www.linkedin.com/in/anderson-paiva-97a607235/"><Linkedin size={18} strokeWidth={1} className='text-violet-700 hover:text-violet-500' /></a> 
              <a target='_black' href="https://github.com/AndersonPaivaS"><Github   size={18} strokeWidth={1} className='text-violet-700 hover:text-violet-500'/></a> 
            </div>
          </div>
        </aside>
        <main className="p-4">
          <Editor />
        </main>
      </div>
    </div>
  )
}

