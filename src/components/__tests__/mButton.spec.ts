import MButton from '../m-button.vue'
import { fireEvent, render } from '@testing-library/vue'

/**
 * Esse exemplo é utilizando a testing-library/vue
 */

test('verifica se o contador funciona', async () => {
    const { getByText, getByRole } = render(MButton);

    getByText("teste 0"); // Implicit assertion that "0" is within the component

    const button = getByRole("button");

    // Dispatch a click event to our increment button.
    await fireEvent.click(button);

    getByText("teste 1");

    await fireEvent.click(button);
})

