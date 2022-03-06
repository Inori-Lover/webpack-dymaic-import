function getComponent() {
  const names = []
  return Promise.all(names.map(name => import(`./lib/${name}`)))
  .then(([lodash, nanoid]) => ({lodash, nanoid}))
  .then(({lodash, nanoid}) => {
    const { default: _ } = lodash
    const { default: rand } = nanoid
    const element = document.createElement('div');
    element.innerHTML = _.join([rand(), rand()], '、');

    return element
  });
}

getComponent().then((component) => {
  document.body.appendChild(component);
})
