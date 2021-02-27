import 'whatwg-fetch'
import dom from '@testing-library/dom'
import useModel from './useModel.js'
import App from './App.js'

describe('the app', () => {
  let app
  let model

  beforeEach(() => {
    model = useModel()
    app = App({ model: model })
  })

  it('shows text', () => {
    model.text.set('bonjour')

    expect(dom.getByText(app, model.text.get())).to.exist
  })

  it('changes text', () => {
    const input = dom.getByPlaceholderText(app, 'type something')
    dom.fireEvent.change(input, { target: { value: 'bye bye' } })
    dom.fireEvent.keyDown(input, { key: 'Enter' })

    expect(dom.getByText(app, 'bye bye')).to.exist
  })

  it('shows time', () => {
    model.time.set(new Date())

    expect(dom.getByText(app, model.time.get().toLocaleTimeString())).to.exist
  })
})
