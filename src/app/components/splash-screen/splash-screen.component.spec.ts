import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SplashScreenComponent } from './splash-screen.component';
import { By } from '@angular/platform-browser';

describe('SplashScreenComponent', () => {
  let component: SplashScreenComponent;
  let fixture: ComponentFixture<SplashScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SplashScreenComponent],
    });

    fixture = TestBed.createComponent(SplashScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display app-splash-screen component if showSplash is true', () => {
    component.setShowSplash(true);
    fixture.detectChanges();
    const addSplashScreen = fixture.debugElement.query(
      By.css('.app-splash-screen')
    );
    expect(addSplashScreen).toBeTruthy();
  });

  it('should not display app-splash-screen component if showSplash is false', () => {
    component.setShowSplash(false);
    fixture.detectChanges();
    const addSplashScreen = fixture.debugElement.query(
      By.css('.app-splash-screen')
    );
    expect(addSplashScreen).toBeFalsy();
  });
});
