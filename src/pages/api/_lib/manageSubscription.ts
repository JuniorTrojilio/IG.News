import { fauna } from "../../../services/fauna";
import { query } from 'faunadb'
import { stripe } from "../../../services/stripe";

export async function saveSubscription(
  subscriptionId: string,
  customerId: string
){
  const userRef = await fauna.query(
    query.Select(
      "ref",
      query.Get(
        query.Match(
          query.Index('user_by_stripe_customer_id'),
          customerId
        )
      )
    )
  )

  console.log('passei por aqui')

  const subscription = await stripe.subscriptions.retrieve(subscriptionId)

  const subscriptionData = {
    id: subscription.id,
    userId: userRef,
    status: subscription.status,
    price_id: subscription.items.data[0].price.id,
   }

  await fauna.query(
    query.Create(
      query.Collection('subscriptions'),
      { data: subscriptionData }
    )
  )
}