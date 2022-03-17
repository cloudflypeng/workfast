const Snip = (props) => {
  return (
    <div className="h-full block flex py-40">
      <div className="w-1/2 flex justify-center flex-row">
        <div className="mx-40 flex flex-col justify-around">
          <text className="text-6xl">
            创建<span className="importtext">代码片段</span>
            让 开发更快速
          </text>

          <button
            className="rounded-full block h-14 w-44 block basecolor text-white">
            给俺康康
          </button>
        </div>

      </div>
      <div className="w-1/2 flex items-center">
        <img className="mr-20 flex-grow-0" alt="codeSnip" src="https://qc2vvn.file.qingfuwucdn.com/file/80f9e56da999244b_1647488162756.jpeg" />
      </div>

    </div>
  )
}

export default Snip