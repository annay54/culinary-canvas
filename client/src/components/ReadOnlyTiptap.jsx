'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline'

const ReadOnlyTiptap = ({ content }) => {
  const editor = useEditor({
    extensions: [StarterKit, Underline],
    editorProps: {
      attributes: {
        class: 'w-full h-auto py-3 text-textColour font-medium text-base',
      },
    },
    editable: false,
    shouldRerenderOnTransaction: false,
    immediatelyRender: false,
    content: content,
  })

  return (
    <>
      <EditorContent editor={editor} />
    </>
  )
}

export default ReadOnlyTiptap