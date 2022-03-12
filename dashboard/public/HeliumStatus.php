<?php
	shell_exec("/etc/monitor-scripts/helium-statuses.sh");
	$live_height = trim(file_get_contents('/var/dashboard/statuses/current_blockheight'));
	$online_status = trim(file_get_contents("/var/dashboard/statuses/online_status"));
	$miner_height = trim(file_get_contents("/var/dashboard/statuses/infoheight"));
	$sync_gap = $live_height - $miner_height;

	header('Content-Type:application/json; charset=utf-8');
	$json_to_output = 
	[
		"live_height" => $live_height,
		"online_status" => $online_status,
		"miner_height" => $miner_height,
		"sync_gap" => $sync_gap,
	];
	echo json_encode($json_to_output);
?>
