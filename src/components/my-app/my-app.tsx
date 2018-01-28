import { Component } from '@stencil/core';


@Component({
  tag: 'my-app',
  styleUrl: 'my-app.scss'
})
export class MyApp {

  render() {
    return (
      <div>
        <header>
          <h1>Stencil App Starter</h1>
        </header>

        <main>
          <stencil-router>

            <stencil-route url='/app/home' component='app-home' exact={true}>
            </stencil-route>

            <stencil-route url='/app/profile/:name' component='app-profile'>
            </stencil-route>

            <stencil-route url='' component='app-default'></stencil-route>

          </stencil-router>
        </main>
      </div>
    );
  }
}
