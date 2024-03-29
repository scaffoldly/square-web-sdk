# square-web-sdk

An unofficial npm package for [Square Web Payments SDK](https://developer.squareup.com/reference/sdks/web/payments),
with TypeScript types definition.

## Install

```bash
# via npm
npm i -S square-web-sdk

# via yarn
yarn add square-web-sdk
```

## Usage

```typescript
import { loadSquare } from 'square-web-sdk';

async function usageExample() {
    await loadSquare(false /* use sandbox */);

    const payments = Square.payments('applicationId', 'locationId');
    const card: Square.Card = await payments.card();
    await card.attach('#card');

    const token = await card.tokenize();
}
```

## License

[MIT](./LICENSE)
