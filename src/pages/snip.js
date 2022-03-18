import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";

import './style.css'
import { useMemo, useState } from "react";
const text = "把常用函数粘贴到这里,将变化部分用$index替换,例如 handle$1 , event$2\n右侧生成vscode的代码片段配置"

const Snip = () => {
  const [isCopy, setIsCopy] = useState(false)

  const [data, setData] = useState('')
  const [description, setdescription] = useState('')
  const [prefix, setprefix] = useState('')

  const target = useMemo(() => {
    const content = data.split("\n").map(item => `\t\t"${item}"`)

    return `"${description}": {
      "prefix": "${prefix}",
      "body": [\n${content.join(',\n')}
      ],
      "description": "${description}"
    }`
  }, [data, description, prefix])

  const handleCopy = async () => {
    setIsCopy(true)
    await navigator.clipboard.writeText(target)
    setTimeout(() => {
      setIsCopy(false)
    }, 1500);
  }

  return (
    <div className="w-full h-full flex  shadow-gray-400 snip">
      <div id="input" className="w-1/2 py-20 flex flex-col items-center justify-center">
        <div className="card w-2/3 py-5 rounded-3xl overflow-hidden ">
          <AceEditor
            placeholder={text}
            style={{ width: '100%' }}
            mode="json"
            theme="monikai"
            name="Editor"
            onChange={(val) => setData(val)}
            highlightActiveLine={false}
            fontSize={16}
            showGutter={false}
            editorProps={{ $blockScrolling: true }}
          />
        </div>
        <button
          onClick={handleCopy}
          className="my-14  block h-14 w-44 block snipbtn text-white">
          {isCopy ? "复制成功" : "复制带走"}

        </button>
      </div>
      <div id="input" className=" black w-1/2 mx-5 flex-col items-center py-20">
        <input placeholder="触发关键词" onChange={(e) => setprefix(e.target.value)} className="w-2/3 block rounded-3xl h-14 px-10 my-14 bg-opacity-0" />
        <input placeholder="描述提示信息" onChange={(e) => setdescription(e.target.value)} className="w-2/3 block rounded-3xl h-14 px-10 my-14 bg-opacity-0" />
        <div className="card w-2/3 py-5 rounded-3xl overflow-hidden ">
          <AceEditor
            readOnly={true}
            value={target}
            style={{ width: '100%' }}
            mode="json"
            theme="monikai"
            name="Editor"
            highlightActiveLine={false}
            fontSize={16}
            showGutter={false}
            editorProps={{ $blockScrolling: true }}
          />
        </div>
      </div>
    </div>
  )
}

export default Snip