import React, { Fragment } from 'react'

export const Foods = ({
  match
}) => {
  return (
    <Fragment>
      フード一覧
      <p>
        restarantsIdは {match.params.restaurantsId} です
      </p>
    </Fragment>
  )
}
