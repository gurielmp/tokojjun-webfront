import getBillboard from "@/actions/get-billboard"
import Billboard from "@/components/billboard"
import Container from "@/components/ui/container"

export const revalidate = 0

const HomePage = async () => {
  const billboard = await getBillboard("b92e7c56-56f6-4611-b1d3-7e874fb94f60")

  return (
    <Container>
      <div className="space-y-10 pv-10">
        <Billboard data={billboard} />
      </div>
    </Container>
  )
}

export default HomePage
