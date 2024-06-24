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
        const { getByRole } = render(MInputText, {
            props: {
                modelValue: 'texto de teste'
            }
        });

        const input = getByRole("input-text") as HTMLInputElement;

        expect(input.value).toBe('texto de teste');
    })
    // it('deve emitir o evento change quando o seu valor for alterado pelo usuário')
    // it('deve emitir o evento change quando o seu valor for alterado programticamente');
})


