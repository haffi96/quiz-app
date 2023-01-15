export default function Page({ params }: { params: { id: string } }) {
    return <p>Id: {params.id}</p>
}