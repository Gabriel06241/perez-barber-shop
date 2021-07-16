import './cartWidget.css'
import styled from 'styled-components'
import IconButton from '@material-ui/core/IconButton'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import Drawer from '@material-ui/core/Drawer'
import Badge from '@material-ui/core/Badge'
import { useState } from 'react'
import { Cart } from '../cart/cart'
import { Fragment } from 'react'

const StyledButton = styled(IconButton)`
  position: fixed;
  z-index: 100;
  right: 20px;
  top: 20px;
`

export const CartWidget = () => {
  const [cartOpen, setCartOpen] = useState(false)
  return (
    <Fragment>
      <Drawer anchor="right" open={cartOpen} onClose={() => setCartOpen(false)}>
        <Cart />
      </Drawer>
      <StyledButton onClick={() => setCartOpen(true)}>
        <Badge badgeContent={5} color="error">
          <AddShoppingCartIcon />
        </Badge>
      </StyledButton>
    </Fragment>
  )
}
