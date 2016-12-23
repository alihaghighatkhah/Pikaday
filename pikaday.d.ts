declare namespace Pikaday {
   interface Config {
      [attr: string]: any;
   }

   interface Pikaday {
       destroy: () => void;
       hide: () => void;
       show: () => void;
       adjustPosition: () => void;
       draw: (force: boolean) => void;
       setEndRange: (value: any) =>void;
       setStartRange: (value: any) =>void;
       setMaxDate: (value: any) =>void;
       setMinDate: (value: any) =>void;
       gotoYear: (year: number) =>void;
       prevMonth: () =>void;
       nextMonth: () =>void;
       gotoMonth: (month: number) =>void;
       gotoToday: () =>void;
       adjustCalendars: () =>void;
       gotoDate: (date: Date) =>void;
       setDelayedConfig: (data: any) => void;
       setDate: (date: Date, preventOnSelect: boolean) =>void;
       getDate: () => Date;
       setMoment: (date: Date, preventOnSelect: boolean) => void;
       getMoment: () => void;
       toString: (format: string) => string;
       isVisible: () => boolean;
       render: (year: number, month: number) => any;
       config: Config;
   }

    export var fn: Pikaday;

}
declare module 'Pikaday' {
    export = Pikaday;
}

