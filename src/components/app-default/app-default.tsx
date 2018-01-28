import { Component } from '@stencil/core';


@Component({
  tag: 'app-default',
  //styleUrl: 'app-default.scss'
})
export class AppDefault {

  render() {
    return (
      <div>
        <stencil-route-link url='/app/home'>
          <button>Home page</button>
        </stencil-route-link>
      </div>
    );
  }
}
