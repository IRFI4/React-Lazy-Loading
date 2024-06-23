const Card = ({ owner, imageUrl }) => {
    const randomUrl = Math.floor(Math.random() * 1000)
    console.log(randomUrl)
    return (
        <div className="w-full rounded overflow-hidden shadow-lg m-2">
            <img className="w-full h-64 object-center" src={`${imageUrl}${randomUrl}`} alt={owner} />
            <div className="px-6 py-4">
                <div className="font-regular text-xl mb-2">
                    {owner}
                </div>
            </div>
        </div>
    )
}

export default Card