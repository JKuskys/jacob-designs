import { angularOutputTarget, ValueAccessorConfig } from '@stencil/angular-output-target';
import { reactOutputTarget } from '@stencil/react-output-target';
import { vueOutputTarget } from '@stencil/vue-output-target';
import { Config } from '@stencil/core';

const angularValueAccessorBindings: ValueAccessorConfig[] = [
  {
    elementSelectors: ['demo-component'],
    event: 'slideChanged',
    targetAttr: 'value',
    type: 'number'
  }
];

export const config: Config = {
  namespace: 'jkd-universal-components',
  outputTargets: [
    angularOutputTarget({
      componentCorePackage: 'jkd-universal-components',
      directivesProxyFile: '../jkd-angular-components/projects/jkd-angular-component-package/src/lib/stencil-generated/components.ts',
      directivesArrayFile: '../jkd-angular-components/projects/jkd-angular-component-package/src/lib/stencil-generated/index.ts',
      valueAccessorConfigs: angularValueAccessorBindings
    }),
    reactOutputTarget({
      componentCorePackage: 'jkd-universal-components',
      proxiesFile: '../jkd-react-components/src/components/stencil-generated/index.ts',
      includeDefineCustomElements: true,
    }),
    vueOutputTarget({
      componentCorePackage: 'jkd-universal-components', // i.e.: stencil-library
      proxiesFile: '../jkd-vue-components/src/components.ts',
    }),
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
