import renderer from 'react-test-renderer'
import App from './App'

function toJson(component: renderer.ReactTestRenderer) {
  const result = component.toJSON()
  expect(result).toBeDefined()
  expect(result).not.toBeInstanceOf(Array)
  return result as renderer.ReactTestRendererJSON
}

test('Check component exists', () => {
  const component = renderer.create(
    <App></App>,
  )
  let tree = toJson(component)
  expect(tree).toMatchSnapshot()
})