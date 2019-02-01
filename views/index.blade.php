<html lang="{{ app()->getLocale() }}">
<head>
    @php
        $defaultUrl = app()->getMenuTypeKey('default.route_prefix');

        app('assets')->data('states', [
            ['value' => 1, 'label' => trans('theme::form.state.enabled')],
            ['value' => 0, 'label' => trans('theme::form.state.disabled')]
        ]);

        app('assets')->data('locks', [
            ['value' => 0, 'label' => trans('theme::form.lock.unlocked')],
            ['value' => 1, 'label' => trans('theme::form.lock.locked')]
        ]);

        app('assets')->data('hides', [
            ['value' => 0, 'label' => trans('theme::form.hide.visible')],
            ['value' => 1, 'label' => trans('theme::form.hide.hidden')]
        ]);

        app('assets')->data('defaults', [
            ['value' => 1, 'label' => trans('theme::form.default.enabled')],
            ['value' => 0, 'label' => trans('theme::form.default.disabled')]
        ]);

        app('assets')->message('theme');
    @endphp

    @include('theme::partials/head')

</head>
<body class="th-index">

    <div id="app">
        <app-controller>
            @yield('content')
        </app-controller>
    </div>

</body>
</html>
