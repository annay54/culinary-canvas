'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline'

const Tiptap = ({ content, onChange }) => {
  const handleChange = (newContent) => {
    onChange(newContent)
  }

  const editor = useEditor({
    extensions: [StarterKit, Underline],
    editorProps: {
      attributes: {
        class: 'w-full h-44 mx-0 flex flex-col px-4 py-3 justify-start border-b-2 border-r-2 border-l-2 rounded-bl-lg rounded-br-lg border-primary bg-white text-textColour items-start gap-3 font-medium text-base',
      },
    },
    content: content,
    immediatelyRender: false,
    onUpdate: ({ editor }) => {
      handleChange(editor.getHTML())
    },
  })

  return (
    <div>
      {/* Toolbar */}
      {/* check if editor is null */}
      {editor && (
        <div className="w-full flex items-start justify-between flex-wrap gap-2 border-2 border-primary rounded-t-lg bg-white">
          <div className='w-full flex flex-wrap justify-between items-center'>
            <div className="w-fit flex flex-wrap gap-1.5 p-1.5 justify-start items-center">
              {/* Bold button */}
              <button
                onClick={(e) => {
                  e.preventDefault();
                  editor.chain().focus().toggleBold().run();
                }}
                className={`bg-inherit w-9 h-9 p-1 ${editor.isActive("bold") ? "bg-primary text-white rounded-lg" : "text-secondary"}`}
                title="Bold"
              ><i className="fa-solid fa-bold w-5 h-5"></i></button>
              {/* Italic button */}
              <button
                onClick={(e) => {
                  e.preventDefault();
                  editor.chain().focus().toggleItalic().run();
                }}
                className={`bg-inherit w-9 h-9 p-1 ${editor.isActive("italic") ? "bg-primary text-white rounded-lg" : "text-secondary"}`}
                title="Italic"
              ><i className="fa-solid fa-italic w-5 h-5"></i></button>
              {/* Underline button */}
              <button
                onClick={(e) => {
                  e.preventDefault();
                  editor.chain().focus().toggleUnderline().run();
                }}
                className={`bg-inherit w-9 h-9 p-1 ${editor.isActive("underline") ? "bg-primary text-white rounded-lg" : "text-secondary"}`}
                title="Underline"
              ><i className="fa-solid fa-underline w-5 h-5"></i></button>
              {/* Strikethrough button */}
              <button
                onClick={(e) => {
                  e.preventDefault();
                  editor.chain().focus().toggleStrike().run();
                }}
                className={`bg-inherit w-9 h-9 p-1 ${editor.isActive("strike") ? "bg-primary text-white rounded-lg" : "text-secondary"}`}
                title="Strikethrough"
              ><i className="fa-solid fa-strikethrough w-5 h-5"></i></button>
              {/* H3 heading button */}
              <button
                onClick={(e) => {
                  e.preventDefault();
                  editor.chain().focus().toggleHeading({ level: 3 }).run();
                }}
                className={`bg-inherit w-9 h-9 p-1 ${editor.isActive("heading", { level: 3 }) ? "bg-primary text-white rounded-lg" : "text-secondary"}`}
                title="Heading"
              ><i className="fa-solid fa-heading w-5 h-5"></i></button>
              {/* Unordered list button */}
              <button
                onClick={(e) => {
                  e.preventDefault();
                  editor.chain().focus().toggleBulletList().run();
                }}
                className={`bg-inherit w-9 h-9 p-1 ${editor.isActive("bulletList") ? "bg-primary text-white rounded-lg" : "text-secondary"}`}
                title="Unordered Bullet List"
              ><i className="fa-solid fa-list-ul w-5 h-5"></i></button>
              {/* Ordered list button */}
              <button
                onClick={(e) => {
                  e.preventDefault();
                  editor.chain().focus().toggleOrderedList().run();
                }}
                className={`bg-inherit w-9 h-9 p-1 ${editor.isActive("orderedList") ? "bg-primary text-white rounded-lg" : "text-secondary"}`}
                title="Ordered Number List"
              ><i className="fa-solid fa-list-ol w-5 h-5"></i></button>
              {/* Blockquote button */}
              <button
                onClick={(e) => {
                  e.preventDefault();
                  editor.chain().focus().toggleBlockquote().run();
                }}
                className={`bg-inherit w-9 h-9 p-1 ${editor.isActive("blockquote") ? "bg-primary text-white rounded-lg" : "text-secondary"}`}
                title="Blockquote"
              ><i className="fa-solid fa-quote-right w-5 h-5"></i></button>
            </div>
            <div className="w-fit flex gap-1.5 p-1.5 justify-start items-center">
              {/* Undo button */}
              <button
                onClick={(e) => {
                  e.preventDefault();
                  editor.chain().focus().undo().run();
                }}
                className={`bg-inherit w-9 h-9 p-1 ${editor.isActive("undo") ? "bg-primary text-white rounded-lg" : "text-secondary"}`}
                title="Undo"
              ><i className="fa-solid fa-rotate-left w-5 h-5"></i></button>
              {/* Redo button */}
              <button
                onClick={(e) => {
                  e.preventDefault();
                  editor.chain().focus().redo().run();
                }}
                className={`bg-inherit w-9 h-9 p-1 ${editor.isActive("redo") ? "bg-primary text-white rounded-lg" : "text-secondary"}`}
                title="Redo"
              ><i className="fa-solid fa-rotate-right w-5 h-5"></i></button>
            </div>
          </div>
        </div>
      )}

      <EditorContent style={{ whiteSpace: "pre-line" }} editor={editor} />
    </div>
  )
}

export default Tiptap