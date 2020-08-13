import * as React from 'react'
import { Card, Image, Heading } from 'rebass'

export interface ClientCardProps {
  url: any
  height: number
  name: number
}

export const ClientCard: React.SFC<ClientCardProps> = ({
  name,
  height,
  url,
}) => {
  return (
    <Card width={256} height={height}>
      <Image src={url} />
      <Heading>{name}</Heading>
    </Card>
  )
}
