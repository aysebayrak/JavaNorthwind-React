import React, {useState} from "react";
import CartSummary from "./CartSummary";
import { Container, Menu } from "semantic-ui-react";
import SignedOut from "./SignedOut";
import SignedIn from "./SignedIn";
import { useHistory } from "react-router";
import { useSelector } from 'react-redux';

export default function Navi() {
  const [isAuthenticated, setIsAuthenticated] = useState(true)
  const history = useHistory()
  const  {cartItems} = useSelector(state => state.cart)

  function handleSignOut() {
    setIsAuthenticated(false)
    history.push("/")
  }

  function handleSignIn() {
    setIsAuthenticated(true)
  }

  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item name="home" />
          <Menu.Item name="messages" />

          <Menu.Menu position="right">
            {cartItems.length>0&&<CartSummary/>}  
            {/* iki sart geçerli ise rendel et göster */}
            {isAuthenticated?<SignedIn signOut={handleSignOut} bisey="1"/>
            :<SignedOut signIn={handleSignIn}/>}  
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}