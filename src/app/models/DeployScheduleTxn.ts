export interface DeployScheduleTxn {
    scheduleId: string;
    releaseName: string;
    releaseDesc: string;
    buildName?: string
    tagName: string;
    sitApporval: string;
    username: string;
    linux?: string;
    status?: string;
    active?: boolean;
}