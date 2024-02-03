import Join from "../../atoms/Join/Join";
import Logo from "../../atoms/Logo";
import Signin from "../../atoms/Signin/Signin";
import Container from "../../common/Container";
import "./Header.scss";
export default function Header() {
  return (
    <>
      <div className="header-section">
        <Container>
          <div className="header">
            <div>
              <Logo />
            </div>
            <div className="button-group">
              <Signin />
              <Join />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
