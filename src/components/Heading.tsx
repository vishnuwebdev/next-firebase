const Heading = ({title}:any) => {
    return (
        <div className="h-28 w-full justify-center flex items-center">
            <span className="text-3xl text-black font-mono font-semibold bg-yellow-300 p-3 rounded-lg">{title}</span>
        </div>
    )
}

export default Heading;