import mButton2 from '../m-button2.vue'
import { expect } from 'vitest'
import { mount } from '@vue/test-utils'

test('verificar o click do botão dois', async () => {
  const buttonSelect = '[role="button"]';
  const wrapper = mount(mButton2);


  expect(wrapper.find(buttonSelect).text()).toContain("0");
  await wrapper.find(buttonSelect).trigger("click");
  expect(wrapper.find(buttonSelect).text()).toContain("1");
})
