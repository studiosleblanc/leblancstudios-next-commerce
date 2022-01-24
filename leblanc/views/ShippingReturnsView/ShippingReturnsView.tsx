import { RichText } from '@leblanc/components/ui'
import { MainLayout } from '@leblanc/layouts'
import React from 'react'

const ShippingReturnsView = () => {
  return (
    <MainLayout>
      <RichText>
        <h1>Return Policy</h1>
        <br />
        <br />
        <br />
        <p>
          If you are not satisfied with the product for any reason you can get a
          refund within 14 days of making a purchase. All products must be returned
          in their original packaging, clean, unworn and in the same condition as
          received.
        </p>
        <p>
          If an item is received in damaged condition you may contact us as soon as
          possible. We will try to exchange or replace the item, if the item is not
          available for replacement and the customer do not want to exchange for any
          other item, will proceed to offer a refund.
        </p>
        <p>Items on FINAL SALE are can not be returned. </p>
        <p>
          If you have any questions, concerns, or complaints regarding our return
          policy, we encourage you to contact us using the details below:
        </p>
        <br />
        <p>
          <a href="mailto:nfo@leblancstudios.com">Info@leblancstudios.com</a>
        </p>
        <br />
        <p>
          For returns instructions please contact us:
          <a href="mailto:nfo@leblancstudios.com">Info@leblancstudios.com</a>
        </p>
        <br />
        <br />
        <br />
        <h1>Shipping</h1>
        <br />
        <br />
        <br />
        <p>Our shipping time depends upon the item the customer is ordering. </p>
        <p>
          Each item has a different manufacturing process. For precise information
          about our shipping times, please read the information of each item
          individually.
        </p>
        <p>
          At LEBLANCSTUDIOS, we always endeavor to ship your order as fast as
          possible but we cannot be responsible for delays as a result of remote
          delivery locations or adverse weather conditions.{' '}
        </p>
        <p>Please expect delays during holidays.</p>
      </RichText>
    </MainLayout>
  )
}

export default ShippingReturnsView
