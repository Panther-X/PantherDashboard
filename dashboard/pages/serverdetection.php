<?php
$info['service'] = file_get_contents(trim('/var/dashboard/services/server-detection'));
if($_GET['start'])
{
	$info['service'] = trim(file_get_contents('/var/dashboard/services/server-detection'));
	echo $info['service'];
	if($info['service'] == 'stopped')
	{
		$file = fopen('/var/dashboard/services/server-detection', 'w');
		fwrite($file, 'start');
		fclose($file);

		$file = fopen('/var/dashboard/logs/server-detection.log', 'w');
		fwrite($file, '');
		fclose($file);

	}
}
?>
<h1>Server Detection</h1>
<textarea id="log_output" disabled>
<?php
echo "Awaiting start...";
?>
</textarea>
<div id="updatecontrols">
	<a title="Start" id="StartUpdateButton" href="#" onclick="StartServerDetection()">Start</a>
</div>

