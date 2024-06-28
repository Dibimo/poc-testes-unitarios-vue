import userEvent from '@testing-library/user-event'
import MInputText from '../m-Input-Text.vue'
import { render, screen } from '@testing-library/vue'

describe('Input Text', () => {
    it('deve aceitar um valor definido pelo usuário', async () => {

        const { emitted } = render(MInputText);
        const user = userEvent.setup()
        const input = screen.getByRole('input-text') as HTMLInputElement

        input.focus()
        await user.keyboard('aaa')

        expect(emitted('update:modelValue').length).toBe(3);

    })

    it('deve aceitar um valor definido programaticamente', async () => {
        const { getByRole, rerender } = render(MInputText, {
            props: {
                modelValue: 'texto de teste'
            }
        });
        const input = getByRole("input-text") as HTMLInputElement;


        expect(input.value).toBe('texto de teste');
        await rerender({ modelValue: 'um novo texto' })

        expect(input.value).toBe('um novo texto')
    })

    it('deve emitir o evento change quando o seu valor for alterado pelo usuário', async () => {
        const { emitted, getByRole } = render(MInputText)
        const input = getByRole('input-text') as HTMLInputElement
        const user = userEvent.setup()

        input.focus()
        await user.keyboard('aaa');

        expect(emitted('change').length).toBe(3);

    })
})


