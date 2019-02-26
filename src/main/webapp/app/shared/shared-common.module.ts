import { NgModule } from '@angular/core';

import { SeemantovdbSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [SeemantovdbSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [SeemantovdbSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class SeemantovdbSharedCommonModule {}
