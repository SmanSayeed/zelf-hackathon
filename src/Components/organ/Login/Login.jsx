import Container from "../../common/Container"
import Onboarding from "../../molecules/Onboarding/Onboarding"
import "./Login.scss"

export default function Login() {
  return (
    <>
        <div className='login'>
            <Container>
                <Onboarding/>
            </Container>
        </div>
    </>
  )
}
