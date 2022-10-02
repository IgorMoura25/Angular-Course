import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FileSizePipe } from './filesize.pipe';

describe('FileSizePipe', () => {

    describe('Behaviour Test', () => {

        @Component({
            template: `Size: {{ size | filesize }}`
        });

        class TestComponent {
            size = 123456789;
        }

        let component: TestComponent;
        let fixture: ComponentFixture<TestComponent>;
        let element = HTMLElement;

        beforeEach(() => {
            TestBed.configureTestingModule({
                declarations: [
                    FileSizePipe,
                    TestComponent
                ]
            });
        });
    });
});