function getComponent() {
  return import('./lib/lodash')
  .then((lodash) => {
    return import('./lib/nanoid').then(nanoid => ({ lodash, nanoid })) 
  })
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
