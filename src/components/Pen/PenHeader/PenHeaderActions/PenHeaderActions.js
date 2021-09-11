import React from 'react';
import { Button } from '../../../UI/Button';
import { PenHeaderActionViewSwitcher } from './PenHeaderActionViewSwitcher/PenHeaderActionViewSwitcher';

export const PenHeaderActions = () => {
    return (
        <div className="navigation-wrap editor-actions-menu">
            <div className="editor-actions">
                <Button text="Run">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" class="feather feather-play"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                </Button>
                <PenHeaderActionViewSwitcher />
            </div>
        </div>
    )
}
