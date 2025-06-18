import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app';
import { config } from './app/app.config.server';
import type { ApplicationRef } from '@angular/core';

const bootstrap = async (): Promise<ApplicationRef> => bootstrapApplication(AppComponent, config);

export default bootstrap;
