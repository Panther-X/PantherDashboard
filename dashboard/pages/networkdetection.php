<?php
$info['service'] = file_get_contents(trim('/var/dashboard/services/network-detection'));
if($_GET['start'])
{
	$info['service'] = trim(file_get_contents('/var/dashboard/services/network-detection'));
	echo $info['service'];
	if($info['service'] == 'stopped')
	{
		$file = fopen('/var/dashboard/services/network-detection', 'w');
		fwrite($file, 'start');
		fclose($file);

		$file = fopen('/var/dashboard/logs/network-detection.log', 'w');
		fwrite($file, '');
		fclose($file);

	}
}
?>
<h1>Network Detection</h1>
<textarea id="log_output" disabled>
<?php
echo "Awaiting start...";
?>
</textarea>
<div id="updatecontrols">
	<a title="Start" id="StartUpdateButton" href="#" onclick="StartNetworkDetection()">Start</a>
</div>

