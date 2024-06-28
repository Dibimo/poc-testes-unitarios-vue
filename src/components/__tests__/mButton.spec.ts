import MButton from '../m-button.vue'
import { fireEvent, render } from '@testing-library/vue'

test('verifica se o contador funciona', async () => {
    const { getByText, getByRole } = render(MButton);
    const button = getByRole("button");


    getByText("teste 0");
    await fireEvent.click(button);
    getByText("teste 1");

})

