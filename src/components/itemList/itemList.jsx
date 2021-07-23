import styled from 'styled-components'
import { Item } from './../item/item'
import Grid from '@material-ui/core/Grid'

const Wrapper = styled.div`
  button {
    border-radius: 0 0 20px 20px;
  }`

export const ItemList = ({ items }) => {
  return (
    <Wrapper>
      <Grid container spacing={3}>
        {items.map(item =>(
          <Grid item key={item.id} xs={12} sm={4}>
            <Item item={item} />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  )
}
